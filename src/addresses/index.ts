import { core as coreEthereumTestnet } from './testnet/ethereum/core';
import { core as coreEthereumMainnet } from './mainnet/ethereum/core';
import { core as coreEthereumLocal } from './local/ethereum/core';

export const core = {
  1: coreEthereumMainnet,
  5: coreEthereumTestnet,
  1337: coreEthereumLocal,
  97: coreEthereumLocal,
};
