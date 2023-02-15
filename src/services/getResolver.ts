import { IContract } from '../types';
import { hashPhoneNumber } from '../libs/hashPhoneNumber';

export default async function(phoneNumber: string, contract: IContract) {
  const hash = hashPhoneNumber(phoneNumber);
  const res = await contract.method.getResolver(hash);
  console.log(res, 'res');
}
