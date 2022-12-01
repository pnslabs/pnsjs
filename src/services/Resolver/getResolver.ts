import {ChainId, Provider} from '../../types';
import {hashPhoneNumber} from "../../libs/hashPhoneNumber";
import {Contract} from '../../libs/contract';
import {core} from "../../addresses";
import {ResolverAbi} from "../../abi/Resolver";


/*
    * This is a method to get the resolver address of a record.
    * @param {string} phoneNumber - The phone number of the record.
    * @param {string} provider - The provider to use for the contract.
    * @param {string} chainId - The chainId to use for the contract.
    * @param {string} coinType - The coinType of the resolver.
    * @returns {string} - The resolver address of the record.
    *
 */
export default async function (provider: Provider, phoneNumber: string, chainId: ChainId, coinType?: string) {
    const contract = Contract(provider, core[chainId].Resolver, ResolverAbi);
    const hash = hashPhoneNumber(phoneNumber);


    const response = await contract.method.getResolver(hash);

    // get the resolver address for a specific coinType from the res.
    if (coinType) {
        return response.find((wallet: any) => wallet.label === coinType);
    }
    return response;
}

