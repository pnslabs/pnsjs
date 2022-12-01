import {ChainId, Provider} from '../../types';
import {hashPhoneNumber} from "../../libs/hashPhoneNumber";
import {Contract} from '../../libs/contract';
import {core} from "../../addresses";
import {ResolverAbi} from "../../abi/Resolver";


/*
    * This is a method to set the resolver address of a record for a label.
    * @param {string} phoneNumber - The phone number of the record.
    * @param {string} provider - The provider to use for the contract.
    * @param {string} chainId - The chainId to use for the contract.
    * @param {string} coinType - The coinType of the resolver.
    * @returns {string} - The resolver address of the record.
    *
 */
export default async function (provider: Provider, phoneNumber: string, chainId: ChainId,resolverAddress: string, coinType?: string)  {
    const contract = Contract(provider, core[chainId].Resolver, ResolverAbi);
    const hash = hashPhoneNumber(phoneNumber);

    return await contract.method.linkPhoneToWallet(hash, resolverAddress, coinType);
}

