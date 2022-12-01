import { AbiItem } from 'web3-utils'

export const ResolverAbi: AbiItem[] =  [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "admin",
                type: "address"
            }
        ],
        name: "AdminAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "expiryTime",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "address",
                name: "updater",
                type: "address"
            }
        ],
        name: "ExpiryTimeUpdated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "gracePeriod",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "address",
                name: "updater",
                type: "address"
            }
        ],
        name: "GracePeriodUpdated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8"
            }
        ],
        name: "Initialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "address",
                name: "wallet",
                type: "address"
            }
        ],
        name: "PhoneLinked",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            }
        ],
        name: "PhoneRecordAuthenticated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "address",
                name: "wallet",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "PhoneRecordCreated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            }
        ],
        name: "PhoneRecordEnteredGracePeriod",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            }
        ],
        name: "PhoneRecordExpired",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newAdmin",
                type: "address"
            }
        ],
        name: "addAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address"
            },
            {
                internalType: "string",
                name: "label",
                type: "string"
            }
        ],
        name: "claimExpiredPhoneRecord",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "admin",
                type: "address"
            }
        ],
        name: "getAdmin",
        outputs: [
            {
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "createdAt",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "exists",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getExpiryTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getGracePeriod",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            }
        ],
        name: "getOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            }
        ],
        name: "getRecord",
        outputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "wallet",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "createdAt",
                        type: "uint256"
                    },
                    {
                        internalType: "string",
                        name: "label",
                        type: "string"
                    },
                    {
                        internalType: "bool",
                        name: "exists",
                        type: "bool"
                    }
                ],
                internalType: "struct IPNSSchema.ResolverRecord[]",
                name: "",
                type: "tuple[]"
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "createdAt",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "exists",
                type: "bool"
            },
            {
                internalType: "bool",
                name: "isInGracePeriod",
                type: "bool"
            },
            {
                internalType: "bool",
                name: "isExpired",
                type: "bool"
            },
            {
                internalType: "uint256",
                name: "expirationTime",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            }
        ],
        name: "getResolverDetails",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "wallet",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "createdAt",
                        type: "uint256"
                    },
                    {
                        internalType: "string",
                        name: "label",
                        type: "string"
                    },
                    {
                        internalType: "bool",
                        name: "exists",
                        type: "bool"
                    }
                ],
                internalType: "struct IPNSSchema.ResolverRecord[]",
                name: "resolver",
                type: "tuple[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getVersion",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address"
            },
            {
                internalType: "string",
                name: "label",
                type: "string"
            }
        ],
        name: "linkPhoneToWallet",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            }
        ],
        name: "reAuthenticate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            }
        ],
        name: "recordExists",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "time",
                type: "uint256"
            }
        ],
        name: "setNewExpiryTime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "time",
                type: "uint256"
            }
        ],
        name: "setNewGracePeriod",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "phoneHash",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address"
            },
            {
                internalType: "string",
                name: "label",
                type: "string"
            }
        ],
        name: "setPhoneRecord",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
]
