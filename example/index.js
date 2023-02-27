/* eslint-disable @typescript-eslint/no-var-requires */
import { ethers } from 'ethers';
// const { PNS } = require('../dist/pns-node.js');
import { PNS } from '../dist/index.js';

const rpc = 'http://127.0.0.1:8545';
const privateKey =
  '0x63a0b059694b0d4cf054c7805689f17decfea83c48508259bd144212d2cc29b1';

const run = async () => {
  const provider = await new ethers.providers.JsonRpcProvider(rpc);
  const signer = await new ethers.Wallet(privateKey, provider);
  const pns = await new PNS(signer);
  const contract = await pns.initialize();
  console.log(contract);
  return contract;
};

run();
