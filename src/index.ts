/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PNSRegistryAbi } from './abi';
import { core } from './addresses';
import { Contract } from './libs/contract';
import {
  getRecordFunc,
  getResolverFunc,
  isRecordVerifiedFunc,
  linkPhoneToWalletFunc,
  recordExistsFunc,
  setPhoneRecordFunc,
} from './services';
import { IChainId, IContract, IProvider } from './types';
import { acceptedNetworks, ErrorMessage } from './utils';

/**
 * @dev The PNS class is used to interact with the PNS smart contract methods
 * @param provider Provider object
 */
export class PNS {
  protected provider?: IProvider;
  protected chainId?: IChainId;
  protected contract?: IContract;
  protected userAddress?: string;

  constructor(provider: IProvider) {
    this.provider = provider;
    this.provider
      ?.getNetwork()
      ?.then((network) => {
        if (!acceptedNetworks.includes(network?.chainId)) {
          ErrorMessage(
            `Invalid chainId: ChainID ${network.chainId} is not supported`
          );
        } else {
          const chainId = network.chainId;
          this.chainId = chainId as IChainId;
          this.contract = Contract(
            provider,
            core[chainId as IChainId].PNSRegistry,
            PNSRegistryAbi.abi
          );
        }
      })
      .catch((error) => {
        console.log(error);
        ErrorMessage('Error connecting to provider');
      });
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
   * @example const resolvers = await pns.getResolver('1234567890');
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
}

export default PNS;
