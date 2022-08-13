require("@nomiclabs/hardhat-ethers"); 
require("@nomiclabs/hardhat-etherscan"); 
require("solidity-coverage"); 
require("dotenv").config()


const FUJI_RPC_URL = process.env.FUJI_RPC_URL 
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY 

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat", 

  networks : { 
    hardhat : {
    chainId: 31337,
  },

  goerli : { 
    url: GOERLI_RPC_URL, 
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [], 
    saveDeployments: true, 
    chainId : 5, 
  }, 

  fuji : { 
      url: FUJI_RPC_URL, 
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [], 
      saveDeployments: true, 
      chainId: 43113, 
  }

}, 

  namedAccounts: { 
    deployer: { 
      default: 0, 
      1: 0, 
    }, 

 }, 

  solidity:  { 
    compilers: [ 
      { 
        version : "0.8.0",
      }, 
      { 
        version: "0.6.0", 
      }
    ], 
    
  }, 

  mocha: { 
    timeout: 500000, // 500 seconds max for runnig the tests 
  }, 


}


