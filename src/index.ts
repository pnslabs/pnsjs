import {ChainId, Provider} from "./types";

export class PNS {

    protected  provider?: Provider;
    protected  chainId?: ChainId;

    constructor(provider: Provider) {
        this.provider = provider;
        this.provider.getNetwork().then((network) => {
            if(![1, 3].includes(network.chainId)) {
                throw new Error(`Invalid chainId: ChainID ${network.chainId} is not supported`);
            }else{
                const chainId = network.chainId;
                this.chainId = chainId as ChainId;
            }
        });
    }
}

export default PNS;


