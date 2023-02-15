/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PNSRegistryAbi } from './abi';
import { core } from './addresses';
import { Contract } from './libs/contract';
import { getRecordFunc, getResolverFunc } from './services';
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
      ?.then(network => {
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
      .catch(error => {
        console.log(error);
        ErrorMessage('Error connecting to provider');
      });
  }

  /**
   * @dev Interacts with the smart contract to get the record of a given phone number
   * @param phoneNumber Phone number to get it's record information
   * @returns The record object information
   * @example const record = await pns.getRecord('1234567890');
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
}

export default PNS;
