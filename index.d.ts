import { IProvider, ISigner } from './types';
/**
 * @dev The PNS class is used to interact with the PNS smart contract methods
 * @param provider Provider object
 * @param signer Signer object
 * @param chainId The connected chain id
 */
export declare class PNS {
    protected provider?: IProvider;
    private contract?;
    protected signer?: ISigner;
    protected registryAddress?: string;
    constructor(signer: ISigner, registryAddress?: string);
    /**
     * @dev Initialize the contract object
     * @returns The contract object
     * @example pns.initialize();
     */
    initialize(): Promise<import("ethers").Contract | Error>;
    /**
     * @dev Interacts with the smart contract to get the record of a given phone number
     * @param phoneNumber Phone number to get it's record information
     * @returns The record object information
     * @example const record = await pns.getRecord('+1234567890');
     */
    getRecord(phoneNumber: string): Promise<any>;
    /**
     * @dev Interacts with the smart contract to create a new record for a given phone number
     * @param phoneNumber Phone number to create a new record
     * @param signer Signer address
     * @param label Ceypro label
     * @returns The transaction response
     * @example const record = await pns.setPhoneRecord('+1234567890', '0x1234567890', 'ETH');
     */
    setPhoneRecord(phoneNumber: string, signer: string, label: string): Promise<any>;
    /**
     * @dev Interacts with the smart contract to renew a given phone record
     * @param phoneNumber Phone number of the record to renew
     * @returns The transaction response
     * @example const record = await pns.renewRecord('+1234567890');
     */
    renewRecord(phoneNumber: string): Promise<any>;
    /**
     * @dev Interacts with the smart contract to claim an expired phone record
     * @param phoneNumber Phone number of the record to claim
     * @param signer Signer address
     * @param label Ceypro label
     * @returns The transaction response
     * @example const record = await pns.claimExpiredPhoneRecord('+1234567890', '0x1234567890', 'ETH');
     */
    claimExpiredPhoneRecord(phoneNumber: string, signer: string, label: string): Promise<any>;
    /**
     * @dev Interacts with the smart contract to check the verification status of a given record
     * @param phoneNumber Phone number to check record verification status
     * @returns A boolean value indicating the verification status of the record
     * @example const record = await pns.isRecordVerified('+1234567890');
     */
    isRecordVerified(phoneNumber: string): Promise<any>;
    /**
     * @dev Interacts with the smart contract to check if a given record exists
     * @param phoneNumber Phone number to check record
     * @returns A boolean value indicating the existence of the record
     * @example const record = await pns.recordExists('+1234567890');
     */
    recordExists(phoneNumber: string): Promise<any>;
    /**
     * @dev Interacts with the smart contract to resolve a given phone number
     * @param phoneNumber Phone number to resolve
     * @returns An array of resolvers
     * @example const resolvers = await pns.getResolver('+1234567890');
     */
    getResolvers(phoneNumber: string): Promise<any>;
    /**
     * @dev Interacts with the smart contract to add a new resolver to a given phone number
     * @param phoneNumber Phone number of the record
     * @param address Address of the new resolver
     * @param label Ceypro label
     * @returns The transaction response
     * @example const record = await pns.linkPhoneToWallet('+1234567890', '0x1234567890', 'BNB');
     */
    linkPhoneToWallet(phoneNumber: string, address: string, label: string): Promise<any>;
    /**
     * @dev Interacts with the guardian Backend to send OTP to phone number
     * @param phoneNumber Phone number to receive OTP
     * @param country An optional country code (ISO 3166-1 alpha-2 e.g US)
     * @returns Result of the request
     * @example const response = await pns.getOtp('+1234567890', 'US');
     */
    getOtp(phoneNumber: string, country: string): Promise<Error | import("axios").AxiosResponse<any, any>>;
    /**
     * @dev Interacts with the smart contract to verify phone number
     * @param phoneNumber Phone number to verify
     * @param otp 6 digit OTP to verify that user owns the phone number
     * @returns Transaction response
     * @example const response = await pns.verifyPhone('+1234567890', '123456');
     */
    verifyPhone(phoneNumber: string, otp: string): Promise<Error | import("axios").AxiosResponse<any, any>>;
    /**
     * @dev Interacts with the smart contract to get the verification record of a given phone number
     * @param phoneNumber Phone number to check record verification record
     * @returns An object containing the verification record
     * @example const response = await pns.getVerificationRecord('+1234567890');
     */
    getVerificationRecord(phoneNumber: string): Promise<any>;
}
export default PNS;
