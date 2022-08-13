
const chai = require('chai'); 
const BN = require('bn.js'); 



import { ethers } from 'hardhat';


chai.use(require('chai-bn')(BN)); 

const DECIMALS ='18'; 
const INITIAL_PRICE='200000000000000000000' ; 

describe('MyFirstContract Unit Test', function() { 
  // Hook from mocha 
  before(async () => { 
    MockV3Aggregator = await ethers.getContractFactory('MockV3Aggregator') ; 
    mockV3Aggregator = await MockV3Aggregator.deploy(DECIMALS, INITIAL_PRICE); 
    await mockV3Aggregator.deployed(); 

    MyFirstContract = await ethers.getContractFactory('MyFirstcontract') ; 
    myFirstContract = await myFirstContract.deploy(mockV3Aggregator.address); 
    await myFirstContract.deployed(); 
  }); 

  beforeEach( async () => { 
       await myFirstContract.setNumber(0); 

  }); 

  it('Initial value is set to 0' , async () => { 
    expect((await myFirstContract.getNumber()).tostring()).to.equal('0'); 
  }) ; 



  it ('retrieve returns a value previously stored', async () => { 
    await myFirstContract.setNumber(77); 
    expect((await myFirstContract.getNumber()).toString()).to.equal('77'); 
  }); 


  it('gets a price feed value', async () => { 
    let result = await myFirstContract.getLatestPrice(); 
    console.log(`price: ${new ethers.BigNumber.from(result._hex).toString()}` ) 
    expect((new ethers.BigNumber.from(result_hex).toString())).equals(INITIAL_PRICE).toString() ; 

  })
})

