// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path: ".env"})



const PRIVATE_KEY = process.env.PRIVATE_KEY



module.exports = {
  solidity: "0.8.4",

  networks:{
      rinkeby:{
        url: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        accounts: [PRIVATE_KEY],
        // blockGasLimit: 9999992945734375000000
      },

      hardhat:{
        

      }
  },
};
