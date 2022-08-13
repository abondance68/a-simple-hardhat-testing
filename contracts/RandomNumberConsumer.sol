

//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol" ;

/**
* DO NOT USE IN PRODUCTION 
* HARDCODED VALUES ARE HERE FOR CLARITY PURPOSES ONLY
**/

contract RandomNumberconsumer  is VRFConsumerBase { 
        bytes32 internal keyHash; 
        uint256 internal fee;
        uint256 public randomResult; 

        /*
        The constructor inherits the VRFConsumerBase 

        Network: goerli
        chainlink VRF coordinator address : 0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D
        LINK token address : 0x326C977E6efc84E512bB9C30f76E30c160eD06FB
        Key Hash: : 0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15
        
         */

  // The constructor initilalizes the consumer contract 
  constructor ()  
  VRFConsumerBase( 
    0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9,
    0xa36085F69e2889c224210F603D836748e7dC0088
  )

  { 
    keyHash = 0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15;
    fee = 0.25 * 10 ** 18 ; // 0,25 LINK (for the goerli network ) 
  }


//The function below makes a request to the VRF coordinator
  function getRandomNumber() public returns (bytes32 requestId) { 
    require(LINK.balanceOf(address(this)) >= fee, "Not Enough Link - Fill the contract with goerli testnet Link"); 
    return  requestRandomness(keyHash, fee) ; 
  }

//The function below is acallback called by VRFCoordinator when it receives a valid VRF proof. 
function fullfillRandomness(bytes32 requestId, uint256 randomness) internal override { 
  randomResult = randomness;

} 

}