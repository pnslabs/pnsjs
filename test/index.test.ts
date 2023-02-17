import { ethers } from 'ethers';
import PNS from '../src/index';
import { IProvider, ISigner } from '../src/types';

const rpc = process.env.RPC;

describe('PNS class', () => {
  const privateKey = process.env.PRIVATE_KEY;
  let pns: PNS;
  let provider: IProvider;
  const phoneNumber = '+1234567890';

  beforeAll(async () => {
    provider = await new ethers.providers.JsonRpcProvider(rpc);
    const signer: ISigner = await new ethers.Wallet(
      privateKey as string,
      provider
    );
    const network = await provider.getNetwork();

    pns = await new PNS(provider, signer, network.chainId);
  });

  it('Successfully initializes the PNS class', async () => {
    expect(pns).toBeDefined();
  });

  it('Returns false when record has not been created', async () => {
    const record = await pns.getRecord(phoneNumber);
    const expectedError = 'phone record not found';

    expect(record.toString()).toContain(expectedError);
  });
});
