import {core as coreEthereumTestnet} from './testnet/ethereum/core'
import {core as coreEthereumMainnet} from './mainnet/ethereum/core'

export const core = {
    1: coreEthereumMainnet,
    3: coreEthereumTestnet,
}
