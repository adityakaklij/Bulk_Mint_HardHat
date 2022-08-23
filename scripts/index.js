// Calling the transaction  

const { ethers } = require("hardhat");
const {arr} = require('../Data/Data.js')

// const arr = [['0x14dc79964da2c08b23698b3d3cc7ca32193d9955','0x14dc79964da2c08b23698b3d3cc7ca32193d9955'],['0x14dc79964da2c08b23698b3d3cc7ca32193d9955','0x976ea74026e726554db657fa54763abd0c3a0aa9'],['0x14dc79964da2c08b23698b3d3cc7ca32193d9955','0x14dc79964da2c08b23698b3d3cc7ca32193d9955'],['0x14dc79964da2c08b23698b3d3cc7ca32193d9955','0x14dc79964da2c08b23698b3d3cc7ca32193d9955'],['0x14dc79964da2c08b23698b3d3cc7ca32193d9955','0x14dc79964da2c08b23698b3d3cc7ca32193d9955']];

// Put the deployed contraat address here
const contractAddress = '0xd35A79071937308D3a01F75Fe62ace066763a60f'
async function main () {
    
    const account = await ethers.provider.listAccounts();
    console.log(account[0])

    const contract = await ethers.getContractFactory('BulkMint')
    const gretter = await contract.attach(contractAddress);// To directly interact
    // const gretter = await contract.deploy(); // To deploy with contract


    const batchMint = async() =>{
      
      for(let i = 0; i < arr.length; i ++ ){
        let batchMintNft = await gretter.batchMint(arr[i]);// Here send the array with 100 address
      }
      }

      const p = await batchMint();

    console.log("Total supply:- ", await gretter.totalSupply())

  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });