import {ethers} from "ethers";

export const hashPhoneNumber = (phoneNumber: string) => {
    return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(phoneNumber));
}
