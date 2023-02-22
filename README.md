# ![PNSjs](https://raw.githubusercontent.com/pnslabs/pns-website/main/public/logo/pns.png)

The PNS javascript library, with [ethers.js](https://github.com/ethers-io/ethers.js) under the hood.

## Installation

Install @pnslabs/pnsjs, alongside [ethers](https://github.com/ethers-io/ethers.js).

```sh
npm install @pnslabs/pnsjs ethers
```

## Getting Started

All that's needed to get started is an ethers or web3 provider instance.
To create a new PNS instance, you have to pass it in the PNS constructor.

```js
import { PNS } from '@pnslabs/pnsjs';
import { ethers } from 'ethers';

let rpcUrl = 'https://mainnet.infura.io/v3/your-api-key';

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

const signer = provider.getSigner()

const PNSInstance = new PNS(signer);
```
