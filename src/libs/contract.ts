import {ethers} from "ethers";

/**
 * This is a contract object that is used to interact with the smart contract.
 * @param {string} provider - The provider to use for the contract.
 * @param {string} contractAddress - The address of the contract.
 * @param {array} abi - The abi of the contract.
 */

export const Contract = (provider: ethers.providers.Provider, contractAddress: string, abi: Array<any>) => {
    return new ethers.Contract(contractAddress, abi, provider);
}
