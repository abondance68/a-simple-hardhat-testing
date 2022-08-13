

import { expect }  from 'chai' ; 
const chai = require('chai'); 
import { ethers } from 'hardhat';

const BN = require('bn.js'); 
chai.use(require('chai-bn.js')(BN)) ; 

describe('MyFirstContract Integration Test ' , function () { 
  before( async () => { 

      MyFirstContract = await ethers.getContractFactory('MyFirstcontract') ; 
      myFirstContract = await MyFirstContract.deploy(''); 
      await myFirstContract.deployed(); 
  }); 

it('Price Feed value greater than 0', async () => { 
    let result = await myFirstContract.getLatestPrice() ; 
    console.log(`price ${new ethers.BigNumber.from(result_hex).toString()}`) ; 
    expect((new ethers.BigNumber.from(result_hex).toString())).to.be.a.bignumber.that.is.greaterThan(new ethers.BigNumber.from('0').toString()) ; 
}) ; 

}) ; 