import {ChainId, Provider} from '../types';
import {hashPhoneNumber} from "../libs/hashPhoneNumber";
import {Contract} from '../libs/contract';
import {core} from "../addresses";
import {PNSCoreAbi} from "../abi/PNSCore";


export default async  function (provider: Provider, phoneNumber: string, chainId: ChainId) {
    const contract = Contract(provider, core[chainId].PNSCore, PNSCoreAbi);
    const hash = hashPhoneNumber(phoneNumber);
    const res = await contract.method.getResolver(hash);
    console.log(res, 'res');
}
