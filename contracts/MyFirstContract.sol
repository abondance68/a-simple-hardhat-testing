

//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV2Interface.sol" ;

contract MyFirstContract { 

  uint number; 
  AggregatorV3Interface internal priceFeed;

  constructor( address _priceFeed) public { 
      priceFeed = AggregatorV2Interface(_priceFeed); 
      number = 0; 
  }

  function setNumber(uint _num) public { 
    number = _num; 
  }

  function  getNumber(uint _num) public view returns (uint) { 
    return number; 
  }

  function getLatestPrice() public view returns (int) { 
    ( 
       uint80 roundId, 
       int price, 
       uint startedAt, 
       uint timeStamp, 
       uint80 answeredInRound
    ) = priceFeed.latestroundata(); 
      return price; 
  }

}