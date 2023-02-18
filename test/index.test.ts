import { ethers, ContractFactory } from 'ethers';
import {
  // DummyPriceOracleAbi,
  PnsGuardianAbi,
  // PnsRegistryAbi,
} from '../src/abi';
// import { core } from '../src/addresses';
import PNS from '../src/index';
import { IContractFactory, IProvider, ISigner } from '../src/types';

const rpc = process.env.LOCAL_RPC;

describe('Justice uses the PNS library', () => {
  const privateKey = process.env.PRIVATE_KEY;
  let pns: PNS;
  let provider: IProvider;
  // const phoneNumber = '+1234567890';
  let guardianAddress: string;
  // let registryAddress: string;
  let priceOracleAddress: string;
  // const ethPrice = '1779400000000';

  beforeAll(async () => {
    provider = await new ethers.providers.JsonRpcProvider(rpc);
    const signer: ISigner = await new ethers.Wallet(
      privateKey as string,
      provider
    );
    const network = await provider.getNetwork();

    const signerAddress = await signer.getAddress();

    // Deploy the guardian contract
    const guardian: IContractFactory = new ContractFactory(
      PnsGuardianAbi.abi,
      PnsGuardianAbi.bytecode,
      signer
    );

    const guardianTx = await guardian.deploy(`${signerAddress}`);
    await guardianTx.deployed();
    guardianAddress = guardianTx.address;

    // Deploy the dummy price oracle contract
    // const priceOracle: IContractFactory = new ContractFactory(
    //   DummyPriceOracleAbi.abi,
    //   DummyPriceOracleAbi.bytecode,
    //   signer
    // );

    // const priceOracleTx = await priceOracle.deploy(ethPrice);
    // priceOracleAddress = priceOracleTx.address;

    // Deploy the registry contract
    // const registry: IContractFactory = new ContractFactory(
    //   PnsRegistryAbi.abi,
    //   PnsRegistryAbi.bytecode,
    //   signer
    // );

    // const registryTx = await registry.deploy([
    //   guardianAddress,
    //   priceOracleAddress,
    //   signerAddress,
    // ]);
    // registryAddress = registryTx.address;

    console.log(
      '::::::::::::::',
      guardianAddress,
      priceOracleAddress,
      signerAddress
    );

    pns = await new PNS(provider, signer, network.chainId);
    pns;
  });

  it('Justice successfully initializes the PNS class', async () => {
    // expect(pns).toBeDefined();
  });

  // it('Justice calls the getRecord method but got back a response; phone record not found', async () => {
  //   const record = await pns.getRecord(phoneNumber);
  //   const expectedError = 'phone record not found';

  //   expect(record.toString()).toContain(expectedError);
  // });

  // it('Justice calls the recordExists method to be certain whether or not the record exists', async () => {
  //   const exists = await pns.recordExists(phoneNumber);

  //   expect(exists).toBe(false);
  // });
});
