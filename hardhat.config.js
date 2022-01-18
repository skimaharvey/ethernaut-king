require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const {PRIVATE_KEY, INFURA_URL} = process.env

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.6",
  networks: {
    rinkeby: {
      accounts: [PRIVATE_KEY], 
      url: INFURA_URL,
      gas: 21000000,
      gasPrice: 8000000000
    }
  }
};
