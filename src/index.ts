/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PnsRegistryAbi } from './abi';
import { core } from './addresses';
import { Contract } from './libs/contract';
// import { ethers } from 'ethers';
import {
  getRecordFunc,
  getResolverFunc,
  isRecordVerifiedFunc,
  linkPhoneToWalletFunc,
  recordExistsFunc,
  setPhoneRecordFunc,
} from './services';
import {
  getOtpFunc,
  getVerificationRecordFunc,
  verifyPhoneFunc,
} from './services/guardian';
import {
  claimExpiredPhoneRecordFunc,
  renewRecordFunc,
} from './services/record';
import { IChainId, IContract, IProvider, ISigner } from './types';
import { ErrorMessage } from './utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

/**
 * @dev The PNS class is used to interact with the PNS smart contract methods
 * @param provider Provider object
 * @param signer Signer object
 * @param chainId The connected chain id
 */
export class PNS {
  protected provider?: IProvider;
  protected contract?: IContract;
  protected signer?: ISigner;

  constructor(provider: IProvider, signer: ISigner, chainId: number) {
    this.provider = provider;
    this.signer = signer;
    this.contract = Contract(
      provider,
      core[chainId as IChainId].PNSRegistry,
      PnsRegistryAbi.abi
    );

    // this.getContract(provider);
  }

  /**
   * @dev Interacts with the smart contract to get the record of a given phone number
   * @param phoneNumber Phone number to get it's record information
   * @returns The record object information
   * @example const record = await pns.getRecord('+1234567890');
   */
  public async getRecord(phoneNumber: string) {
    try {
      const record = await getRecordFunc(phoneNumber, this.contract!);
      return record;
    } catch (error) {
      ErrorMessage(error);
    }
  }

  /**
   * @dev Interacts with the smart contract to create a new record for a given phone number
   * @param phoneNumber Phone number to create a new record
   * @param signer Signer address
   * @param label Ceypro label
   * @returns The transaction response
   * @example const record = await pns.setPhoneRecord('+1234567890', '0x1234567890', 'ETH');
   */
  public async setPhoneRecord(
    phoneNumber: string,
    signer: string,
    label: string
  ) {
    try {
      const tx = await setPhoneRecordFunc(
        phoneNumber,
        signer,
        label,
        this.contract!
      );
      return tx;
    } catch (error) {
      ErrorMessage(error);
    }
  }

  /**
   * @dev Interacts with the smart contract to renew a given phone record
   * @param phoneNumber Phone number of the record to renew
   * @returns The transaction response
   * @example const record = await pns.renewRecord('+1234567890');
   */
  public async renewRecord(phoneNumber: string) {
    try {
      const tx = await renewRecordFunc(phoneNumber, this.contract!);
      return tx;
    } catch (error) {
      ErrorMessage(error);
    }
  }

  /**
   * @dev Interacts with the smart contract to claim an expired phone record
   * @param phoneNumber Phone number of the record to claim
   * @param signer Signer address
   * @param label Ceypro label
   * @returns The transaction response
   * @example const record = await pns.claimExpiredPhoneRecord('+1234567890', '0x1234567890', 'ETH');
   */
  public async claimExpiredPhoneRecord(
    phoneNumber: string,
    signer: string,
    label: string
  ) {
    try {
      const tx = await claimExpiredPhoneRecordFunc(
        phoneNumber,
        signer,
        label,
        this.contract!
      );
      return tx;
    } catch (error) {
      ErrorMessage(error);
    }
  }

  /**
   * @dev Interacts with the smart contract to check the verification status of a given record
   * @param phoneNumber Phone number to check record verification status
   * @returns A boolean value indicating the verification status of the record
   * @example const record = await pns.isRecordVerified('+1234567890');
   */
  public async isRecordVerified(phoneNumber: string) {
    try {
      const status = await isRecordVerifiedFunc(phoneNumber, this.contract!);
      return status;
    } catch (error) {
      ErrorMessage(error);
    }
  }

  /**
   * @dev Interacts with the smart contract to check if a given record exists
   * @param phoneNumber Phone number to check record
   * @returns A boolean value indicating the existence of the record
   * @example const record = await pns.recordExists('+1234567890');
   */
  public async recordExists(phoneNumber: string) {
    try {
      const status = await recordExistsFunc(phoneNumber, this.contract!);
      return status;
    } catch (error) {
      ErrorMessage(error);
    }
  }

  /**
   * @dev Interacts with the smart contract to resolve a given phone number
   * @param phoneNumber Phone number to resolve
   * @returns An array of resolvers
   * @example const resolvers = await pns.getResolver('+1234567890');
   */
  public async getResolvers(phoneNumber: string) {
    try {
      const resolver = await getResolverFunc(phoneNumber, this.contract!);
      return resolver;
    } catch (error) {
      ErrorMessage(error);
    }
  }

  /**
   * @dev Interacts with the smart contract to add a new resolver to a given phone number
   * @param phoneNumber Phone number of the record
   * @param address Address of the new resolver
   * @param label Ceypro label
   * @returns The transaction response
   * @example const record = await pns.linkPhoneToWallet('+1234567890', '0x1234567890', 'BNB');
   */
  public async linkPhoneToWallet(
    phoneNumber: string,
    address: string,
    label: string
  ) {
    try {
      const tx = await linkPhoneToWalletFunc(
        phoneNumber,
        address,
        label,
        this.contract!
      );
      return tx;
    } catch (error) {
      ErrorMessage(error);
    }
  }

  /**
   * @dev Interacts with the guardian Backend to send OTP to phone number
   * @param phoneNumber Phone number to receive OTP
   * @param country An optional country code (ISO 3166-1 alpha-2 e.g US)
   * @returns Result of the request
   * @example const response = await pns.getOtp('+1234567890', 'US);
   */
  public async getOtp(phoneNumber: string, country: string) {
    try {
      const response = await getOtpFunc(phoneNumber, country);
      return response;
    } catch (error) {
      ErrorMessage(error);
    }
  }

  /**
   * @dev Interacts with the smart contract to verify phone number
   * @param phoneNumber Phone number to verify
   * @param otp 6 digit OTP to verify that user owns the phone number
   * @returns Transaction response
   * @example const response = await pns.verifyPhone('+1234567890', '123456');
   */
  public async verifyPhone(phoneNumber: string, otp: string) {
    try {
      const response = await verifyPhoneFunc(phoneNumber, otp, this.signer);
      return response;
    } catch (error) {
      ErrorMessage(error);
    }
  }

  /**
   * @dev Interacts with the smart contract to get the verification record of a given phone number
   * @param phoneNumber Phone number to check record verification record
   * @returns An object containing the verification record
   * @example const response = await pns.getVerificationRecord('+1234567890');
   */
  public async getVerificationRecord(phoneNumber: string) {
    try {
      const response = await getVerificationRecordFunc(
        phoneNumber,
        this.contract!
      );
      return response;
    } catch (error) {
      ErrorMessage(error);
    }
  }
}

export default PNS;
