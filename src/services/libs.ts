import { IContract } from '../types';
import { ErrorMessage } from '../utils';

/**
 * @dev Interacts with the smart contract to get the current registry cost in USD
 * @param contract Contract object
 * @returns The registry cost in USD
 */
const getRegistryCostInUSD = async (contract: IContract) => {
  try {
    const registryCost = await contract.method.registryCostInUSD();
    return registryCost;
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to get the current registry cost in ETH
 * @param contract Contract object
 * @returns The registry cost in ETH
 */
const getRegistryCostInETH = async (contract: IContract) => {
  try {
    const registryCostInUsd = await getRegistryCostInUSD(contract);
    const registryCostInEth = await contract.method.convertUSDToETH(
      registryCostInUsd.toString()
    );
    return registryCostInEth;
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to get the current registry renew cost in USD
 * @param contract Contract object
 * @returns The registry renew cost in USD
 */
const getRegistryRenewCostInUSD = async (contract: IContract) => {
  try {
    const registryRenewCost = await contract.method.registryRenewCostInUSD();
    return registryRenewCost;
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to get the current registry renew cost in ETH
 * @param contract Contract object
 * @returns The registry renew cost in ETH
 */
const getRegistryRenewCostInETH = async (contract: IContract) => {
  try {
    const registryRenewCostInUsd = await getRegistryRenewCostInUSD(contract);
    const registryRenewCostInEth = await contract.method.convertUSDToETH(
      registryRenewCostInUsd.toString()
    );
    return registryRenewCostInEth;
  } catch (error) {
    ErrorMessage(error);
  }
};

export {
  getRegistryCostInUSD,
  getRegistryCostInETH,
  getRegistryRenewCostInUSD,
  getRegistryRenewCostInETH,
};
