import { PNSRegistryAbi } from './abi';
import { core } from './addresses';
import { Contract } from './libs/contract';
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
    this.provider?.getNetwork()?.then(network => {
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
    });
  }
}

export default PNS;
