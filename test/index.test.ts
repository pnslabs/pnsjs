import { ethers, ContractFactory } from 'ethers';
import {
  DummyPriceOracleAbi,
  PnsGuardianAbi,
  PnsRegistryAbi,
} from '../src/abi';
import PNS from '../src/index';
import { IContractFactory, IProvider, ISigner } from '../src/types';
import { ethToWei } from '../src/utils';

const rpc = process.env.LOCAL_RPC;

describe('Justice uses the PNS library', () => {
  const privateKey = process.env.PRIVATE_KEY;
  let pns: PNS;
  let provider: IProvider;
  const phoneNumber = '+2348130813007';
  let guardianAddress: string;
  let registryAddress: string;
  let priceOracleAddress: string;
  const ethPrice = '1779400000000';
  const registryCost = ethToWei(10); // 10 usd
  const registryRenewCost = ethToWei(5); // 5 usd
  let signerAddress: string;
  const label = 'ETH';
  const country = 'NG';
  let otp = '123456';

  beforeAll(async () => {
    provider = await new ethers.providers.JsonRpcProvider(rpc);
    const signer: ISigner = await new ethers.Wallet(
      privateKey as string,
      provider
    );
    const network = await provider.getNetwork();

    signerAddress = await signer.getAddress();

    // Deploy the guardian contract
    const guardian: IContractFactory = new ContractFactory(
      PnsGuardianAbi.abi,
      PnsGuardianAbi.bytecode,
      signer
    );

    const guardianTx = await guardian.deploy();
    await guardianTx.deployed();
    await guardianTx.initialize(signerAddress);
    guardianAddress = guardianTx.address;

    // Deploy the dummy price oracle contract
    const priceOracle: IContractFactory = new ContractFactory(
      DummyPriceOracleAbi.abi,
      DummyPriceOracleAbi.bytecode,
      signer
    );

    const priceOracleTx = await priceOracle.deploy(ethPrice);
    await priceOracleTx.deployed();
    priceOracleAddress = priceOracleTx.address;

    // Deploy the registry contract
    const registry: IContractFactory = new ContractFactory(
      PnsRegistryAbi.abi,
      PnsRegistryAbi.bytecode,
      signer
    );

    const registryTx = await registry.deploy();
    await registryTx.deployed();
    await registryTx.initialize(
      guardianAddress,
      priceOracleAddress,
      signerAddress
    );
    registryAddress = registryTx.address;
    // Set the registry cost
    await registryTx.setRegistryCost(registryCost);
    // Set the registry renew cost
    await registryTx.setRegistryRenewCost(registryRenewCost);

    pns = await new PNS(provider, signer, network.chainId, registryAddress);
  });

  it('Justice successfully initializes the PNS class', async () => {
    expect(pns).toBeDefined();
  });

  it('Justice calls the getRecord method but got back a response; phone record not found', async () => {
    const record = await pns.getRecord(phoneNumber);
    const expectedError =
      'Error: VM Exception while processing transaction: revert phone record not found';

    expect(record.toString()).toBe(expectedError);
  });

  it('Justice calls the recordExists method to be certain whether or not the record exists', async () => {
    const exists = await pns.recordExists(phoneNumber);

    expect(exists).toBe(false);
  });

  it('Justice attemps to set a phone record but gets an error b/cos the phone number is not verified', async () => {
    const record = await pns.setPhoneRecord(phoneNumber, signerAddress, label);
    const expectedError =
      'Error: VM Exception while processing transaction: revert phone record is not verified';

    expect(record.toString()).toBe(expectedError);
  });

  it('Justice tries to get a verification OTP', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await pns.getOtp(phoneNumber, country);
    const alreadyVerifiedResponse =
      'guardian already verified now setPhone Record';
    otp = '123456';

    expect(response?.data?.status).toBe(200);
    expect(response?.data?.response).toBe(alreadyVerifiedResponse);
  });

  it('Justice tries verifying phone number with wrong otp', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await pns.verifyPhone(phoneNumber, otp);
    const expectedError = 'invalid otp code for phone  shared';

    expect(response?.data?.status).toBe(400);
    expect(response?.data?.response).toContain(expectedError);
  });
});
