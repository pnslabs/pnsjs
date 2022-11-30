# ![PNSjs](https://raw.githubusercontent.com/pnsfoundation/pns-website/main/public/icons/logo.svg?token=GHSAT0AAAAAABTHTOKCC2JFHQ3WTUROU6GYY4H3QBA);

The PNS javascript library, with [ethers.js](https://github.com/ethers-io/ethers.js) under the hood.

## Installation

Install @pnsfoundation/pnsjs, alongside [ethers](https://github.com/ethers-io/ethers.js).

```sh
npm install @pnsfoundation/pnsjs ethers
```

## Getting Started

All that's needed to get started is an ethers or web3 provider instance.
To create a new PNS instance, you have to pass it in the PNS constructor.

```js
import { PNS } from '@pnsfoundation/pnsjs'
import { ethers } from 'ethers'

let providerUrl = 'https://mainnet.infura.io/v3/your-api-key'

const provider = new ethers.providers.JsonRpcProvider(providerUrl)

const PNSInstance = new PNS(provider);
```
