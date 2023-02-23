/* eslint-disable @typescript-eslint/no-var-requires */
import { ethers } from 'ethers';
// const { PNS } = require('../dist/pns-node.js');
import { PNS } from '../dist/pns.js';

const rpc = 'http://127.0.0.1:8545';
const privateKey = '';

const run = async () => {
  const provider = await new ethers.providers.JsonRpcProvider(rpc);
  const signer = await new ethers.Wallet(privateKey, provider);
  const pns = await new PNS(signer);
  const contract = await pns.initialize();

  return contract;
};

run();
