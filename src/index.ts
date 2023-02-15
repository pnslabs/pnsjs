import { PNSRegistryAbi } from './abi';
import { core } from './addresses';
import { Contract } from './libs/contract';
import { IChainId, IContract, IProvider } from './types';

export class PNS {
  protected provider?: IProvider;
  protected chainId?: IChainId;
  protected contract?: IContract;

  constructor(provider: IProvider) {
    this.provider = provider;
    this.provider?.getNetwork()?.then(network => {
      if (![1, 5].includes(network?.chainId)) {
        throw new Error(
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
