import {ChainId, Provider} from "./types";
import setResolver from "./services/Resolver/setResolver";
import getResolver from "./services/Resolver/getResolver";

export class PNS {

    protected provider?: Provider;
    protected chainId?: ChainId;

    constructor(provider: Provider) {
        this.provider = provider;
        this.provider.getNetwork().then((network) => {
            if (![1, 3].includes(network.chainId)) {
                throw new Error(`Invalid chainId: ChainID ${network.chainId} is not supported`);
            } else {
                const chainId = network.chainId;
                this.chainId = chainId as ChainId;
            }
        });
    }

    /**
     * This is a method to set the resolver address of a record.
     * @param {string} phoneNumber - The phone number of the record.
     * @param {string} coinType - The coinType of the resolver.
     * @param {string} resolverAddress - The chainId to use for the contract.
     * @returns {string}  - The resolver address of the record.
     */
    public async setResolver(phoneNumber: string, resolverAddress: string, coinType?: string) {
        if (!this.provider || !this.chainId) {
            throw new Error('Provider or chainId is not set');

        }
        return await setResolver(this.provider, phoneNumber, this.chainId, resolverAddress, coinType);
    }

    /**
     * This is a method to get the resolver address of a record for a label.
     * @param {string} phoneNumber - The phone number of the record.
     * @param {string} coinType - The coinType of the resolver.
     * @returns {string}  - The resolver address of the record. If coinType is not provided, it returns an array of all the resolvers.
     */
    public async getResolver(phoneNumber: string, coinType?: string) {
        if (!this.provider || !this.chainId) {
            throw new Error('Provider or chainId is not set');

        }
        return await getResolver(this.provider, phoneNumber, this.chainId, coinType);
    }
}


export default PNS;


